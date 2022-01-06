// Registering component in log-component.js
AFRAME.registerComponent('base', {
    schema: {
      radius: {type:"number",default:500},
      height: {type:"number",default:3}
    },
    init: function () {
       this.el.getAttribute("geometry",{
        primitive:"cylinder",
        radius:this.data.radius,
        height:this.data.height
       })
       this.el.setAttribute("material",{color:"#1769aa"})
      }
  });

