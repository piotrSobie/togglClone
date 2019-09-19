export class PlanModel {
  _id: string;
  imgUrl: string;
  type: string;
  price: string;
  description: string;
  startDate: Date;
  finishDate: Date;
  additionalWishes: string;

  constructor(_id: string, type: string, price: string, description: string, startDate?: string, finishDate?: string, additionalWishes?: string) {
    this._id = _id;
    this.type = type;
    this.price = price;
    this.description = description;
    if (!startDate && !finishDate) {
      this.startDate = new Date();
      this.finishDate = new Date();
      this.finishDate.setFullYear(this.startDate.getFullYear()+1);
    } else {
      this.startDate = new Date(startDate);
      this.finishDate = new Date(finishDate);
    }
    this.additionalWishes = additionalWishes;

    if (this.type === 'Starter') {
      this.imgUrl = '../../../assets/common/pictures/pizza-slice.jpg';
    } else if (this.type === 'Premium') {
      this.imgUrl = '../../../assets/common/pictures/hot-dog.jpg';
    } else if (this.type === 'Enterprise') {
      this.imgUrl = '../../../assets/common/pictures/hamburger.jpg';
    }
  }

  getActiveTime() {
    return `${this.startDate.getDate()}.${this.startDate.getMonth()+1}.${this.startDate.getFullYear()} ${this.startDate.getHours()}:${this.startDate.getMinutes()}:${this.startDate.getSeconds()}
    - ${this.finishDate.getDate()}.${this.finishDate.getMonth()+1}.${this.finishDate.getFullYear()} ${this.finishDate.getHours()}:${this.finishDate.getMinutes()}:${this.finishDate.getSeconds()}`
  }
}
