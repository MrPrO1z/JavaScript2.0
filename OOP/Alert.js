class Alert {
    constructor(a, c, d) {
        this.messege = a;
        this.cssClass = c;
        this.out = d;
    }
    showAlert() {
        document.querySelector(this.out).innerHTML = `<p class="${this.cssClass}">${this.messege}</p>`;
    }
    myAlert() {
        alert(this.messege);
    }
}