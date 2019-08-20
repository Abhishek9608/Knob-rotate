(function () {
  function mouseAngle(e) {
      const knob = document.querySelector(".knob");
      let _mouseX = e.clientX;
      let _mouseY = e.clientY;
      let _w = window.innerWidth / 2;
      let _h = window.innerHeight / 2;
      let _angle = (Math.atan2(_h - _mouseY, _w - _mouseX) * 180 / Math.PI) - 90;
      knob.style.transform = `rotate(${_angle}deg)`;
      console.log(_angle);
  }
  document.addEventListener("mousemove", mouseAngle, false);
})();
