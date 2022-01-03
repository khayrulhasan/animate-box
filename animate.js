
class Animate {
    constructor(wrapperId) {
        this.wrapperId = wrapperId;
        this.wrapperHeight = 0;
        this.box = null;
        this.animateDirection = 0; // animation direction, Ex- 0 for animate right bottom.
        this.positionLeft = 0;
        this.positionTop = 0;
    }

    createBox() {
        const wrapper = document.querySelector(`#${this.wrapperId}`);
        this.box = document.createElement('div');

        //set wrapper height
        this.wrapperHeight = wrapper.offsetHeight;

        //add class name
        this.box.classList.add('box');
        const boxStyle = {
            background: 'blue',
            height: '100px',
            width: '100px',
        };

        Object.assign(this.box.style, boxStyle);
        wrapper.append(this.box);

        // set initial offset value
        this.positionLeft = this.box.offsetLeft;
        this.positionTop = this.box.offsetTop;

    }

    animateBox() {
        const positionLeft = this.positionLeft + 100;
        const positionTop = this.positionTop + 100;

        if (positionLeft >= screen.width || positionTop >= this.wrapperHeight) {
            this.animateDirection = 1;
        } else if (this.box.offsetLeft < 0) {
            this.animateDirection = 0;
        }

        if (this.animateDirection === 0) {
            this.positionLeft = this.positionLeft + 10;
            this.positionTop = this.positionTop + 10;
        } else {
            this.positionLeft = this.positionLeft - 10;
            this.positionTop = this.positionTop - 10;
        }

        this.box.style.left = `${this.positionLeft}px`;
        this.box.style.top = `${this.positionTop}px`;

        setTimeout(() => {
            this.animateBox()
        }, 1000);
    }

}

const box = new Animate('wrapper');
box.createBox();
box.animateBox();


