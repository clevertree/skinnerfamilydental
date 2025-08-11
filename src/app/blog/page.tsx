import React from 'react';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Blog | Stephanie L. Skinner D.M.D. Family Dentistry',
};

export default function BlogPage() {
  return (
    <div>
      <div id="r5002" className="row designRow">
        <div className="container container-fluid">
          <div className="col col-sm-12">
            <div id="r1474" className="row bgfilter">
              <div className="container container-fixed">
                <div id="c4141" className="col col col-sm-1 hidden-sm"></div>
                <div id="c1144" className="col col-lg-10 col-md-10 col-sm-12">
                  <div id="m2920" className="module text">
                    <h1 className="spottext" style={{ textAlign: 'center' }}>
                      Blog
                    </h1>
                  </div>
                </div>
                <div id="c3278" className="col col col-sm-1 hidden-sm"></div>
              </div>
            </div>
            <div id="r3262" className="row ">
              <div className="container container-fixed">
                <div className="col col-sm-12 col-md-12 col-lg-1 hidden-md hidden-sm flexCol">
                  <div id="m2248" className="module autospacer"></div>
                </div>
                <div id="c1308" className="col col-sm-12 col-md-12 col-lg-10">
                  <div id="m4113" className="module blog">
                    <div className="slides">
                      <div className="slide">
                        <ul className="posts clear">
                          <li className="post">
                            <div className="textContainer">
                              <div className="smalltext details">
                                <span className="date">05/11/2020</span>{' '}
                                <span className="hyphen"> - </span>
                                <span className="author">
                                  {' '}
                                  stephanielskinnerdmdfamilydentistry
                                </span>
                                <span className="commentCount comments">
                                  0 Comments
                                </span>
                              </div>
                              <div className="postContent">
                                <a
                                  href="/b/site-launch.html"
                                  title="Site Launch"
                                  className="subtitle title"
                                >
                                  Site Launch
                                </a>
                                <div className="bodytext shortDescription">
                                  <p>
                                    Posted on January 29, 2019 by
                                    stephanielskinnerdmdfamilydentistry
                                    <br />
                                    Our new website is finally up. We’ve worked hard
                                    to get a beautiful new site ready and we’re
                                    proud to show it off. Thanks for reading our
                                    blog. We have lots of great blog posts in the
                                    works. Please check back or contact us now to
                                    find out how we can help you.
                                  </p>
                                </div>
                              </div>
                              <a
                                href="/b/site-launch.html"
                                title="Site Launch"
                                className="button readMore"
                                aria-label="Read More: Site Launch"
                              >
                                Read More
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-sm-12 col-md-12 col-lg-1 hidden-md hidden-sm flexCol">
                  <div id="m4911" className="module autospacer"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
