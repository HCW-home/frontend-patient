declare interface NavigatorUAData {
    brands: { brand: string; version: string }[];
    mobile: boolean;
    platform: string;
    getHighEntropyValues(hints: string[]): Promise<Record<string, string>>;
}

declare interface Navigator {
    userAgentData?: NavigatorUAData;
}
