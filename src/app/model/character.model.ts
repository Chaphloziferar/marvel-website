export class Character{
  public Id: number | null;
  public Name: String | null;
  public Description: String | null;
  public ImageUrl: String | null;

  constructor(obj: DataObj){
    this.Id = obj && obj.Id || null;
    this.Name = obj && obj.Name || null;
    this.Description = obj && obj.Description || null;
    this.ImageUrl = obj && obj.ImageUrl || null;
  }
}


interface DataObj {
  Id: number | null;
  Name: String | null;
  Description: String | null;
  ImageUrl: String | null;
}
