export interface IEnterprise {
  _id: string;
  name: string;
  image_src: string;
  realties: string;
}

export interface IEnterpriseClient extends IEnterprise {
  clientName?: string;
}
