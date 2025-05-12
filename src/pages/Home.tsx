import { useEffect } from 'react';
import '../styles/Home.css';

const Home = () => {
  useEffect(() => {
    class TxtRotate {
      toRotate: string[];
      el: HTMLElement;
      loopNum: number;
      period: number;
      txt: string;
      isDeleting: boolean;

      constructor(el: HTMLElement, toRotate: string[], period: number) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = period || 2000;
        this.txt = '';
        this.isDeleting = false;
        this.tick();
      }

      tick() {
        const i = this.loopNum % this.toRotate.length;
        const fullTxt = this.toRotate[i];

        this.txt = this.isDeleting
          ? fullTxt.substring(0, this.txt.length - 1)
          : fullTxt.substring(0, this.txt.length + 1);

        this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;

        let delta = 300 - Math.random() * 100;
        if (this.isDeleting) delta /= 2;

        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 500;
        }

        setTimeout(() => this.tick(), delta);
      }
    }

    const elements = document.getElementsByClassName('txt-rotate');
    Array.from(elements).forEach((el) => {
      const element = el as HTMLElement;
      const toRotate = element.getAttribute('data-rotate');
      const period = element.getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(element, JSON.parse(toRotate), parseInt(period || '2000', 10));
      }
    });

    const css = document.createElement('style');
    css.type = 'text/css';
    css.innerHTML = '.txt-rotate > .wrap { border-right: 0.08em solid #f472b6 }';
    document.body.appendChild(css);
  }, []);

  return (
    <div className="home">
      <div className="intro">Hi, I am Nandini!</div>
      <div className="info">
        A passionate and detail-oriented IT enthusiast with a strong foundation in data engineering,
        full-stack development, and cloud technologies. I enjoy building meaningful digital
        experiences and solving real-world problems using technology. With hands-on experience in
        Power BI dashboards, cloud platforms like AWS and Azure, and blockchain development, I
        thrive at the intersection of innovation and functionality. I’m currently pursuing my B.Tech
        in Information Technology with a Management minor, and I love exploring new tools that
        bridge creativity and code.
      </div>
      <div className="hero-right">
        <span
          className="txt-rotate"
          data-period="2000"
          data-rotate='[ "SOFTWARE DEVELOPER.", "CLOUD ENGINEER.", "AI/ML ENGINEER." ]'>
        </span>
      </div>
      <div className="quote">
        <p>Think Deep. Build Forward</p>
      </div>
     <div className="resume-button">
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
        <button className="resume-btn">Resume</button>
      </a>
    </div>
    </div>
  );
};

export default Home;
