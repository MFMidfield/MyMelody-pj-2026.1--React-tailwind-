import React, { Component } from 'react'


export class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="bottom-0 left-0 w-full py-6 px-2 bg-white backdrop-blur-md mb-0 lg:px-50 z-10">
          <div className=" flex flex-col w-full lg:flex-row justify-between items-center">
            <div className="text-gray-600 font-medium w-fit  ">
              &copy; 2024 My Melody. By Midfield.
            </div>
            <div className="flex flex-col gap-1 mt-2  w-fit lg:mt-0">
              <div className="text-gray-600 font-medium">
                <p>Email : mfmidfield@example.com</p>
              </div>
              <div className="text-gray-600 font-medium">
                <p>Phone : +66xx-xxx-xxx</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer