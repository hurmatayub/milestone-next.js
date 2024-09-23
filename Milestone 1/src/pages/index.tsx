// export default function Home () {
//   return (
//      <div>
//         <h1>hello World</h1>
//      </div>
//   )
// }


import Head from 'next/head';

function HomePage() {

  return (
    <div className="container">
      <h4>MileStone 01 
      NEXT JS  APPLICATION</h4>
      <Head>
        <title>Hello World!</title>
      </Head>
      <div className="first">
        <p>
        <span>H</span>ello
        </p>
      </div>
      <div className="second">
        <p>
       <span>W</span>orld!
      </p>
      </div>
      <p className='Click'> For more info Click the below</p>
      <button className='btn'><a href='https://github.com/hurmatayub/next.js/blob/main/milestone%20next%20js/helloworld/README.md'>Click for more info</a></button>
      <p className='CB'>Created By: Senior Student Of GIAIC <span>"HURMAT AYUB"</span></p>
     </div>
  )

     
} 

export default HomePage;









