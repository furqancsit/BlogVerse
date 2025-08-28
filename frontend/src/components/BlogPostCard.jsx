
import React from 'react'


const BlogPostCard = ({ title, content, author, date }) => {
    return (
        <div className='p-[2px] rounded-xl bg-gradient-to-r cursor-pointer from-purple-500 via-pink-500 to-blue-500'>

            <div className="bg-neutral-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-white">
                <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
                <p className="text-sm text-neutral-300 mb-4">{content}</p>
                <div className="flex justify-between items-center text-neutral-400 text-xs">
                    <span>By {author}</span>
                    <span>{date}</span>
                </div>
                <div className="mt-4">
                    <button className="text-sm cursor-pointer text-blue-400 hover:text-blue-300 transition-colors">
                        Read More →
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BlogPostCard