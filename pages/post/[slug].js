import React from 'react';
import {demoData} from '../../demoData';

function post({postData}) {
    return (
        <div>
            <h1> {postData.title} </h1>
        </div>
    );
}

export default post;

export const getStaticPaths = async () => {

    return {
      paths: demoData.map((post) => {
        return {
          params: {
            slug: post.slug
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

    const postData=demoData[0]

    return {
      props: {
        postData,
      },
    }
  }