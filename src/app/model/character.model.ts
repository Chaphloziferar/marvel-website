export class Character{
  public Name: String | null;
  public Description: String | null;
  public ImageUrl: String | null;

  constructor(obj: DataObj){
    this.Name = obj && obj.Name || null;
    this.Description = obj && obj.Description || null;
    this.ImageUrl = obj && obj.ImageUrl || null;
  }
}


interface DataObj {
  Name: String | null;
  Description: String | null;
  ImageUrl: String | null;
}
