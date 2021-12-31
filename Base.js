// Registering component in log-component.js
AFRAME.registerComponent('base', {
    schema: {
      radius:{type:"number",default:400},
      height:{type:"number",default:1}
    },
    init: function () {
       this.el.getAttribute("geometry",{
        primitive:"cylinder",
        radius:this.data.radius,
        height:this.data.height
       })
       this.el.setAttribute("geometry",{color:"#1769aa"})
      }
  });

