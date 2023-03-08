export interface RequestParamsTopDestination {
  Language: string;
  Reference: boolean;
  ForceGet: boolean;
}

export interface TopDestinationResponse {
  RegionCode: string;
  RegionName: string;
  List: Array<ListDestination>;
}

export interface ListDestination {
  Code: string;
  Identity: number;
  CityCode: string;
  CountryCode: string;
  RegionCode: string;
  Name_Vi: string;
  Name_En: string;
  CityName_Vi: string;
  CityName_En: string;
  CountryName_Vi: string;
  CountryName_En: string;
  RegionName_Vi: string;
  RegionName_En: string;
  TopDestination: boolean;
  Order: number;
  CreatedDate: string;
  UpdatedDate: any;
  UpdatedUser: any;
  CreatedUser: string;
  Visible: boolean;
  CreatedTime: string;
  UpdatedTime: any;
  CreatedName: any;
  UpdatedName: any;
  UserAvatar: any;
}

export interface RequestParamsGetDestinationByKeyword {
  Keyword: string;
  Language: string;
  Reference: boolean;
  ForceGet: boolean;
}
