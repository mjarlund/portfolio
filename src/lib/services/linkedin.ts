import { LINKEDIN_ACCESS_TOKEN } from '$env/static/private';
import type { LinkedInDate } from '../types/linkedin';

const LINKEDIN_API_BASE = 'https://api.linkedin.com/rest';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
				'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// LinkedIn Member Snapshot API interfaces
interface LinkedInSnapshotResponse {
	paging: {
		start: number;
		count: number;
		total: number;
		links?: Array<{
			type: string;
			rel: string;
			href: string;
		}>;
	};
	elements: Array<{
		snapshotDomain: string;
		snapshotData: any[];
	}>;
}

export interface TimelineItem {
	period: string;
	title: string;
	subtitle: string;
	location?: string;
	description: string;
	technologies: string[];
	type: 'experience' | 'education' | 'volunteering';
}

class LinkedInService {
	private accessToken: string;

	constructor() {
		this.accessToken = LINKEDIN_ACCESS_TOKEN;
	}

	private async makeRequest(endpoint: string, params: URLSearchParams = new URLSearchParams()): Promise<LinkedInSnapshotResponse> {
		const url = `${LINKEDIN_API_BASE}${endpoint}?${params.toString()}`;
		
		const response = await fetch(url, {
			headers: {
				'Authorization': `Bearer ${this.accessToken}`,
				'Content-Type': 'application/json',
				'LinkedIn-Version': '202312'
			}
		});

		if (!response.ok) {
			throw new Error(`LinkedIn API error: ${response.status} ${response.statusText}`);
		}

		return await response.json();
	}

	private formatPeriod(startDate: LinkedInDate | string | undefined, endDate?: LinkedInDate | string): string {
		const formatDate = (date: LinkedInDate | string | undefined) => {
			if (!date) return '';
			if (typeof date === 'string') {
				// Handle string dates like "2020-09-01"
				const d = new Date(date);
				return `${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
			}
			if (typeof date === 'object' && 'year' in date) {
				// Handle object dates with year/month
				const month = (date as LinkedInDate).month ? MONTHS[(date as LinkedInDate).month! - 1] : '';
				return `${month} ${(date as LinkedInDate).year}`.trim();
			}
			return '';
		};

		const start = formatDate(startDate);
		const end = endDate ? formatDate(endDate) : 'Present';
		
		return `${start} - ${end}`;
	}

	async getPositions(): Promise<TimelineItem[]> {
		try {
			const params = new URLSearchParams({
				'q': 'criteria',
				'domain': 'POSITIONS'
			});

			const data = await this.makeRequest('/memberSnapshotData', params);
			
			if (!data.elements || data.elements.length === 0) {
				return [];
			}

			const positionsElement = data.elements.find(el => el.snapshotDomain === 'POSITIONS');
			if (!positionsElement || !positionsElement.snapshotData) {
				return [];
			}

			return positionsElement.snapshotData.map((position: any) => ({
				period: this.formatPeriod(position['Start Date'], position['End Date']),
				title: position['Title'] || position['Position'] || 'Position',
				subtitle: position['Company Name'] || position['Company'] || 'Company',
				location: position['Location'] || '',
				description: position['Description'] || position['Summary'] || '',
				technologies: [], // LinkedIn API doesn't provide this, would need to be manually added
				type: 'experience' as const
			}));
		} catch (error) {
			console.error('Error fetching LinkedIn positions:', error);
			return [];
		}
	}

	async getEducation(): Promise<TimelineItem[]> {
		try {
			const params = new URLSearchParams({
				'q': 'criteria',
				'domain': 'EDUCATION'
			});

			const data = await this.makeRequest('/memberSnapshotData', params);
			
			if (!data.elements || data.elements.length === 0) {
				return [];
			}

			const educationElement = data.elements.find(el => el.snapshotDomain === 'EDUCATION');
			if (!educationElement || !educationElement.snapshotData) {
				return [];
			}

			return educationElement.snapshotData.map((education: any) => ({
				period: this.formatPeriod(education['Start Date'], education['End Date']),
				title: education['Degree Name'] || education['Degree'] || 'Degree',
				subtitle: `${education['Field Of Study'] || ''} • ${education['School Name'] || ''}`.replace(/^•\s/, '').replace(/\s•$/, ''),
				location: education['Location'] || '',
				description: `Studies in ${education['Field Of Study'] || 'various subjects'} at ${education['School Name'] || 'institution'}`,
				technologies: [],
				type: 'education' as const
			}));
		} catch (error) {
			console.error('Error fetching LinkedIn education:', error);
			return [];
		}
	}

	async getVolunteerExperience(): Promise<TimelineItem[]> {
		try {
			const params = new URLSearchParams({
				'q': 'criteria',
				'domain': 'VOLUNTEERING_EXPERIENCES'
			});

			const data = await this.makeRequest('/memberSnapshotData', params);
			
			if (!data.elements || data.elements.length === 0) {
				return [];
			}

			const volunteerElement = data.elements.find(el => el.snapshotDomain === 'VOLUNTEERING_EXPERIENCES');
			if (!volunteerElement || !volunteerElement.snapshotData) {
				return [];
			}

			return volunteerElement.snapshotData.map((volunteer: any) => ({
				period: this.formatPeriod(volunteer['Start Date'], volunteer['End Date']),
				title: volunteer['Role'] || volunteer['Position'] || 'Volunteer',
				subtitle: volunteer['Organization'] || volunteer['Company'] || 'Organization',
				location: volunteer['Location'] || '',
				description: volunteer['Description'] || volunteer['Summary'] || '',
				technologies: [],
				type: 'volunteering' as const
			}));
		} catch (error) {
			console.error('Error fetching LinkedIn volunteer experience:', error);
			return [];
		}
	}

	async getAllTimelineData(): Promise<TimelineItem[]> {
		try {
			const [positions, education, volunteering] = await Promise.all([
				this.getPositions(),
				this.getEducation(),
				this.getVolunteerExperience()
			]);

			const parseStartDate = (item: TimelineItem): Date => {
				// Try to extract the first date from the period string
				const match = item.period.match(/^([A-Za-z]{3})? ?(\d{4})/);
				if (match) {
					const month = match[1] ? ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].indexOf(match[1]) : 0;
					const year = parseInt(match[2]);
					return new Date(year, month >= 0 ? month : 0, 1);
				}
				return new Date(0); // fallback to epoch if not found
			};

			const allItems = [...positions, ...education, ...volunteering];
			
			// Sort by start date (most recent first)
			return allItems.sort((a, b) => parseStartDate(b).getTime() - parseStartDate(a).getTime());
		} catch (error) {
			console.error('Error fetching LinkedIn data:', error);
			// Return empty array or fallback data
			return [];
		}
	}
}

export const linkedInService = new LinkedInService();
