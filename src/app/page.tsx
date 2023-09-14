"use client"
import { useState } from 'react';
import { useSearchParams } from 'next/navigation'

export default function Home() {
  let [omv, omf] = useState<boolean>(false);
  
  const searchParams = useSearchParams()
 
  const comment = searchParams.get('comment')
  console.log(comment)
  if (!comment){
    return (
      <main>
        <div id='backdrop' style={{display: omv? "block": "none"}} onClick={() => omf(false)}></div>
        <form method='post' action="?" style={{display: omv? "flex": "none"}}>
          <h1>UserName</h1>
          <input type="text" name='n' id='n'/>
          <h1>Title</h1>
          <input type="text" name='t' id='t'/>
          <h1>Description</h1>
          <textarea name="d" id="d"></textarea>
          {/* <input type="text" name='d' id='d'/> */}
  
          <input type="submit" />
        </form>
  
        <Post t="i use arch linux arch linux arch linux arch linux arch linux" d="i use rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust" n="misile"/>
        <Post t="i use arch linux arch linux arch linux arch linux arch linux" d="i use rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust" n="misile"/>
        <Post t="i use arch linux arch linux arch linux arch linux arch linux" d="i use rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust" n="misile"/>
        <Post t="i use arch linux arch linux arch linux arch linux arch linux" d="i use rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust" n="misile"/>
        <Post t="i use arch linux arch linux arch linux arch linux arch linux" d="i use rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust" n="misile"/>
        <img src="add.svg" id="add" onClick={() => omf(true)}/>
      </main>
    )
  }else{
    return (
      <main>
        <div id='backdrop' style={{display: omv? "block": "none"}} onClick={() => omf(false)}></div>
        <form method='post' action="?" style={{display: omv? "flex": "none"}}>
          <h1>UserName</h1>
          <input type="text" name='n' id='n'/>
          <h1>Title</h1>
          <input type="text" name='t' id='t'/>
          <h1>Description</h1>
          <textarea name="d" id="d"></textarea>
          {/* <input type="text" name='d' id='d'/> */}
  
          <input type="submit" />
        </form>
  
        <Post t="i use arch linux arch linux arch linux arch linux arch linux" d="i use rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust rust" n="misile" m={true}/>
        <img src="add.svg" id="add" onClick={() => omf(true)}/>

      </main>
    )
  }
}
function Post(props: { t: String, d: String, n: String, m?: boolean }){
  if (props.m){
    return <article id="m">
      <section id="head">
        <h1>{props.t}</h1>
        <h2>{props.d}</h2>
      </section>
      <section id="foot">
        <div>by - <b>{props.n}</b></div>
        <div id="btns">
          <div> 1<img src="thumb_up.svg"/> </div>
        </div>
      </section>
    </article>
  }
  return <article>
    <section id="head">
      <h1>{props.t}</h1>
      <h2>{props.d}</h2>
    </section>
    <section id="foot">
      <div>by - <b>{props.n}</b></div>
      <div id="btns">
        <div> 1<img src="thumb_up.svg"/> </div>
        <div> <img src="chat_bubble.svg"/> </div>
      </div>
    </section>
  </article>
}