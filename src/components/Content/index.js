import React from 'react';
import { ContentStyles } from '../../styled/ContentStyles';

const Content = () => {
    return (
        <ContentStyles>
            <article className="main-article" style={{backgroundImage: `url(${window.location.href}/img/dungeon.jpg)`}}>
                <div className="main-article__content">
                    <h2 className="main-article__title">Description</h2>
                    <p className="main-article__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium incidunt iure neque amet 
                        aperiam unde repudiandae explicabo veniam libero facilis veritatis vero quasi deleniti animi, 
                        dolorum laboriosam ab impedit facere dolorem voluptate.
                    </p>
                </div>
                <div className="main-article__copyright">© Copyright</div>
            </article>
        </ContentStyles>
    )
}

export default Content;