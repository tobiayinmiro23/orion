import React from 'react'
import { html2canvas } from 'html2canvas'
// import html2

const ScreenShot4 = () => {
    html2canvas(document.body).then(function(canvas) {
        document.body.appendChild(canvas);
    });
    const CaptureImg=()=>{
        // html2canvas(document.body).then(function(canvas){
        //     var a=document.createElement('a')
        //     a.href=canvas.toDataURL('...assets/image.jpeg').replace('image/octet-stream')
        //     a.download='somefile.jpg'
        //     a.click()
        // })
       
    }
  return (
    <div>
        <button onClick={CaptureImg}>Capture screen</button>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, perferendis. Aut totam libero quas quis illo ipsa et quaerat, unde ut dolorum? Error officia iure tempora. Porro dicta unde vel vitae est perspiciatis, quo rerum cum aliquid iure, odit doloremque accusamus corporis nesciunt error quam delectus obcaecati veritatis sit voluptatem amet quibusdam neque. Voluptatem quae quam qui consequatur ipsum beatae voluptate. Architecto autem sit, vel odit illum incidunt deserunt nihil, quidem ullam est consequatur. Natus quaerat amet beatae error officia animi numquam architecto minima vero placeat! Corrupti perferendis accusantium ut aspernatur delectus dolor impedit culpa asperiores, unde, dolore saepe numquam? Cupiditate exercitationem eaque alias ut. Ex autem unde architecto, omnis mollitia quae, ratione blanditiis voluptate iusto et labore ullam ipsum laboriosam sapiente, veritatis odit fugit? Cumque exercitationem culpa fugiat voluptates illum aliquam deleniti ullam esse optio nobis? Unde officia quidem iste dolore quod rerum accusamus laudantium quia sequi molestiae quas, est ab sed ea, magnam sint deserunt sunt sapiente magni non in! Consectetur accusantium voluptatum placeat nam ratione nobis praesentium ex explicabo, necessitatibus mollitia doloribus cupiditate pariatur, a sit ducimus suscipit, ea blanditiis quod. Doloremque quaerat iusto perferendis praesentium odit quisquam, velit ratione corporis, enim harum nihil rem a vero consectetur amet unde blanditiis esse eveniet minus! Inventore ut minima numquam, beatae sequi eligendi temporibus facere, quod quasi earum maxime cumque nulla praesentium.
{/* <p></p> */}
    </div>
  )
}

export default ScreenShot4