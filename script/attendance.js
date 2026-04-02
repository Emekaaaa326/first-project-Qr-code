const recordContainer = document.getElementById("rec_main");

//  <div class="rec_sec">
//             <div class="sec">
//               <img src="/svg/dash.jpg" />
//               <div>
//                 <h3>liam fredderson</h3>
//                 <h5>2222,4:45am</h5>
//               </div>
//               <h3>ID: 22324536</h3>
//               <span class="material-symbols-outlined" id="checked">
//                 check_circle
//               </span>
//             </div>
//           </div>

// JSON strigify and Json parse
let examInfoData = [];
const rawData = localStorage.getItem("examInfo");

console.log(rawData);

if (rawData) {
  examInfoData = JSON.parse(rawData);
}

let dataToRender = [];

if (examInfoData.length > 0) {
  dataToRender = examInfoData.map((info, index) => {
    return `
         <div class="rec_sec">
            <div class="sec">
              <img src="/svg/dash.jpg" />
              <div>
                <h3>${info.firstName} ${info.lastName}</h3>
                <h5>${info.email}</h5>
              </div>
              <h3>ID: ${index + 1}</h3>
              <span class="material-symbols-outlined" id="checked">
                check_circle
              </span>
            </div>
          </div>
        `;
  }).join(" ");
}


console.log(dataToRender)

recordContainer.innerHTML =  dataToRender;
