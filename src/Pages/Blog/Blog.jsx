import React from "react";
import Banner from "../Shared/Banner/Banner";

const Blog = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="bg-white py-2 sm:py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              From the blog
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          <div className="mx-auto mt-0 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-4 border-t border-gray-200 pt-0 sm:mt-8 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* First Question Start */}
            <article className="flex max-w-xl flex-col items-start justify-between">
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  What is an access token and refresh token? How do they work
                  and where should we store them on the client-side?
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  <span className="font-bold">Ans: </span>Access token is a
                  short-lived credentials with an expiration time that is issued
                  to a client by and authentication upon successfull
                  authentication. It is usually signed and encrypted and it
                  contains information about the user and the permission they
                  have been granted.On the other side, A Refresh token is
                  long-lived token and can use the refresh token to obatain a
                  new access token when the current access token expires. It
                  should store in an hTTP-only secure cookie.
                </p>
              </div>
            </article>
            {/* First Question End */}
            {/* Second Question Start */}
            <article className="flex max-w-xl flex-col items-start justify-between">
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  What is express js? What is Nest JS?
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  <span className="font-bold">Ans: </span>Express.js is a
                  popular and minimalist web application framework for Node.js.
                  It provides a set of features and utilities that help in
                  building web applications and APIs quickly and
                  efficiently.NestJS, on the other hand, is a progressive and
                  opinionated framework for building efficient, scalable, and
                  maintainable server-side applications using Node.js. NestJS is
                  built with TypeScript and takes advantage of its features like
                  strong typing and decorators to provide a structured and
                  organized development experience
                </p>
              </div>
            </article>
            {/* Second Question End */}
            {/* Third Question Start */}
            <article className="flex max-w-xl flex-col items-start justify-between">
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  What is MongoDB aggregate and how does it work?
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  <span className="font-bold">Ans: </span>In MongoDB, the
                  aggregate framework is a powerful tool used to process and
                  analyze data in a more complex and flexible manner than simple
                  queries. It allows you to perform advanced data aggregation
                  operations, such as grouping, filtering, projecting, sorting,
                  joining, and transforming data, all within the MongoDB server.
                  Here's an steps of the basic components and how the aggregate
                  framework works: Pipeline Stages,Input Documents,Document
                  Transformation, Result.
                </p>
              </div>
            </article>
            {/* Third Question End */}
            {/* Fourth Question Start */}
            <article className="flex max-w-xl flex-col items-start justify-between">
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  Compare SQL and NoSQL databases?
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  <span className="font-bold">Ans: </span>SQL databases use a
                  structured data model based on tables with predefined schemas,
                  where NoSQL databases use various data models, including
                  key-value, document, columnar, and graph.SQL databases are
                  vertically scalable,where NoSQL databases are horizontally
                  scalable by design. SQL databases generally support ACID
                  (Atomicity, Consistency, Isolation, Durability) properties,
                  but NoSQL databases may not provide full ACID compliance.
                </p>
              </div>
            </article>
            {/* Fourth Question End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
