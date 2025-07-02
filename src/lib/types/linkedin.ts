// Type definitions for LinkedIn API responses
export interface LinkedInDate {
	year: number;
	month?: number;
}

export interface LinkedInTimePeriod {
	startDate: LinkedInDate;
	endDate?: LinkedInDate;
}
