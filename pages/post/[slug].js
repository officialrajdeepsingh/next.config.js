import React from 'react';
import {demoData} from '../../demoData';

function post({postData}) {
    return (
        <div className='main'>
            <h1> {postData.property} </h1>
        </div>
    );
}

export default post;

export const getStaticPaths = async () => {

    return {
      paths: demoData.map((post) => {
        return {
          params: {
            slug: post.property.trim().toLowerCase().replaceAll(" ","-")
          },
        }
      }),
      fallback: false,
    }
}
export const getStaticProps = async (
    context
  ) => {
    const { slug } = context.params

    const postData=demoData.filter(item=> item.property.trim().toLowerCase().replaceAll(" ","-")=== slug)

    return {
      props: {
        postData:postData[0],
      },
    }
  }