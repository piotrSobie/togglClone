export class PlanModel {
  id: number;
  imgUrl: string;
  type: string;
  price: string;
  description: string;
  startDate: Date;
  finishDate: Date;
  activeTime: string;

  constructor(imgUrl: string, type: string, price: string, description: string) {
    this.imgUrl = imgUrl;
    this.type = type;
    this.price = price;
    this.description = description;
    this.startDate = new Date();
    this.finishDate = new Date();
    this.finishDate.setFullYear(this.startDate.getFullYear()+1);
    this.activeTime = `${this.startDate.getDate()}.${this.startDate.getMonth()+1}.${this.startDate.getFullYear()} ${this.startDate.getHours()}:${this.startDate.getMinutes()}:${this.startDate.getSeconds()}
    - ${this.finishDate.getDate()}.${this.finishDate.getMonth()+1}.${this.finishDate.getFullYear()} ${this.finishDate.getHours()}:${this.finishDate.getMinutes()}:${this.finishDate.getSeconds()}`;
  }
}
