function menuClick() {
  let cffg = document.querySelector("#cffg");
  let pb = document.querySelector("#pb");

  // Iterate through each child element of the SVG
  for (let i = 0; i < pb.children.length; i++) {
    let cffgPath = cffg.children[i];
    let pbPath = pb.children[i];
    // cffgPath
    // console.log(`cffgPath element ID: ${cffgPath.id}`);
    // console.log(`cffgPath element path data: ${cffgPath.getAttribute('d')}`);
    // console.log(`cffgPath element fill color: ${cffgPath.getAttribute('fill')}`);
    // // pbPath
    // console.log(`pbPath element ID: ${pbPath.id}`);
    // console.log(`pbPath element path data: ${pbPath.getAttribute('d')}`);
    // console.log(`pbPath element fill color: ${pbPath.getAttribute('fill')}`);

    let tl = new TimelineMax();

    let nextShape = cffg.classList.contains("mobile-menu-active")
      ? "cffg"
      : "pb";

    if (cffg.classList.contains("mobile-menu-active")) {
      tl.to(`#cffg path:nth-child(${i + 1})`, 1, {
        morphSVG: {
          shape: `#${nextShape} path:nth-child(${i + 1})`,

          shapeIndex: 12,
          type: "rotational",
        },
        ease: Power0.easeNone,
      });
    } else {
      tl.to("#cffg", 1, {
        rotation: "360deg",
        ease: Power0.out,
        transformOrigin: "50% 50%",
      }).to(`#cffg path:nth-child(${i + 1})`, 1, {
        morphSVG: {
          shape: `#${nextShape} path:nth-child(${i + 1})`,
          shapeIndex: 12,
          type: "rotational",
        },
        ease: Power0.easeNone,
      });
    }
    // tl.reverse();
  }

  cffg.classList.toggle("mobile-menu-active");
}
