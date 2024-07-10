import './Home.css';
import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  const posts = [
    {
      href: "https://sitechop.com/posts/12-speeding-up-your-website",
      imgSrc: "https://img.freepik.com/free-vector/business-man-avatar-cartoon_24640-47592.jpg?t=st=1719837082~exp=1719840682~hmac=2bec8ea166af5d8cee18d92e03a1b243e0bdb0a80699ec00eac3fe5e1e72e285&w=740",
      title: "Speeding Up Your Website 101",
      description: "It seems like only a select few, besides big companies and corporations, care about web page speed and performance. Browsing the web, it's common to see load times of 5 seconds and pages that weigh 4, 5, sometimes 10 megabytes! Even if that's not you, is your website optimized to its full potential? This post is not about stripping your page, its about optimizing everything so that your website loads as fast as possible."
    },
    {
      href: "https://sitechop.com/posts/11-guide-to-grunt-js-basics",
      imgSrc: "https://img.freepik.com/free-vector/gradient-man-planting-tree-illustration_23-2149201659.jpg?t=st=1719838439~exp=1719842039~hmac=0602f9e2a49bf9453c0629d05cef360c355ab81e3b04cbb215c27fe6eb7c9558&w=740",
      description: "Grunt is one of those tools I've heard of forever, but never got around to using. Everyone raves about how great it is and the amount of time they've saved, but could it really be that great? This week I took some time to learn the basics and try it on a project. They were right... Grunt is pretty awesome. Today I'm going to take you through the installation process, teach you the basics, and take you through the creation of your first Gruntfile."
    },
    {
      href: "https://sitechop.com/posts/10-svg-social-media-sprite-icon-tutorial",
      title: "Social Media Icons Tutorial (SVG Sprite + Image Replacement)",
      description: "Nearly every modern website has social media icons on their page. It's a great and stylish why to cross link and hold everything together. There are ton's of bad methods to add these icons to your page though. Today I offer you a clean and semantic way to add social media icons to your website using a SVG sprite sheet and image replacement. A PNG fall back and IE6+ support is included as well."
    },
    {
      href: "https://sitechop.com/posts/9-svg-css-icon-buttons-with-fallback",
      imgSrc: "https://img.freepik.com/free-vector/flat-university-concept_23-2148181765.jpg?t=st=1719838519~exp=1719842119~hmac=cf76a436161463e2610f2c8fb0b5a5925829c21fc617189acffe78c3c2247a18&w=740",
      title: "SVG+CSS Icon Buttons with PNG Fallbacks Tutorial",
      description: "Icons make everything look cooler, there's some magical component to them that can really bring out a website. Visuals aside, using icons offer some great UX benefits as well, in many cases the user spots the icon before the word it represents. With the rising use/support of SVG we no longer have to worry about our icons looking choppy on a 'retina screen'. Today I want to take you though the process of creating SVG+CSS icon buttons, with PNG fallbacks."
    },
    {
      href: "https://sitechop.com/posts/8-migrating-to-ubuntu-as-designer-developer",
      imgSrc: "https://img.freepik.com/free-vector/qa-engineer-composition-with-programming-coding-symbols-flat-vector-illustration_1284-78159.jpg?t=st=1719838621~exp=1719842221~hmac=2cea8535fd83bf3d2ce47437f7611ef615f7aaaa23cdc9d537707b1a5d8b40ec&w=1060",
      title: "Migrating to Ubuntu as a Web Designer and Developer",
      description: "Originally a Windows and OSX user, I made the jump to Ubuntu Linux early this year. After a brief adjustment period, I must say I've grown to love it. The stability and UNIXiness (yeah, made that word up) of OSX and the flexibility of Windows make for the perfect combination of awesomeness. Today I want to do two things. Tell you why I made the migration to Ubuntu Linux as a web designer/developer, and give you a overview of all the different softwares I use on a daily basis."
    }
  ];

  return (
    <div>
      <Navbar/>
      <h1>home</h1>
    <section id="postIndex" className="widthWrapper">
      {posts.map((post, index) => (
        <article key={index}>
          <a target="_blank" rel="noopener noreferrer" href={post.href}>
            <div className="postImg">
              <img src={post.imgSrc} alt={post.title} />
            </div>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </a>
        </article>
      ))}
    </section>

    </div>
  )
}

export default Home