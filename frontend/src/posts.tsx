import React, { useEffect } from 'react';
import { GetTokenSilentlyOptions, useAuth0 } from '@auth0/auth0-react';
import settings from './settings_ida.json';

interface Props {
    token: string
}

function Posts(props: Props) {
    // const { getAccessTokenSilently } = useAuth0();

    useEffect(() => {
        const f = async () => {
          if (props.token) {
            const token = props.token //await props.getAccessTokenSilently();

            const response = await fetch(settings.apiEndpoint, {
                headers: {Authorization: `Bearer ${token}`}
            });
          }
        }

        f()
    }, [props.token])

	return (
        <div>
            <p>Posts</p>
        </div>
    )
}

export default Posts;

/*
const callApi = async () => {
  try {
    const token = await auth0.getTokenSilently();

    const response = await fetch(apiEndpoint, {
      headers: {Authorization: `Bearer ${token}`}
    });

    const responseData = await response.json();
    const posts = responseData.posts;

    const templateRow = document.querySelector('#post-template-row');
    const resultTbody = document.querySelector('#posts tbody');

    while (resultTbody.firstChild) {
      resultTbody.removeChild(resultTbody.firstChild);
    }

    if (posts.length === 0) {
      // 投稿が見つからない
      eachElement("#posts", (c) => c.classList.add("hidden"));
      eachElement("#result-alert", (c) => c.classList.remove("hidden"));
      document.querySelector('#result-alert').textContent = "投稿が見つかりません。";
      return;
    }

    posts.forEach((post) => {
      const newRow = templateRow.cloneNode(true);
      newRow.querySelector('.post-username').textContent = post.username;
      newRow.querySelector('.post-date').textContent = new Date(post.created_at * 1000).toLocaleString('ja-jp');
      newRow.querySelector('.post-body .text').textContent = post.body;
      if (post.imageUrl) {
        newRow.querySelector('.post-body').querySelector('a').setAttribute('href', post.imageUrl);
        newRow.querySelector('.post-body').querySelector('img').setAttribute('src', post.imageUrl);
      } else {
        newRow.querySelector('.post-body').removeChild(newRow.querySelector('.post-body').firstChild);
      }
      resultTbody.appendChild(newRow);
    });

    eachElement("#result-alert", (c) => c.classList.add("hidden"));
    eachElement("#posts", (c) => c.classList.remove("hidden"));
  } catch (e) {
    console.error(e);
  }
};
*/