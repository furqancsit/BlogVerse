import Blog from "../models/blog.model.js"



// for admin
const getAllPost = async (req, res) => {
    try {
        const posts = await Blog.find().sort({ createdAt: -1 });
        res.json({ posts });
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch posts', error: error.message });
    }
};



// for user
const getSinglePost = async (req, res) => {
    try {

        const post = await Blog.findById(req.params.id)

        if (!post) {
            res.status(404).json({ message: "post not foung" })

        }
        res.json({ post })
    } catch (error) {

        res.status(500).json({ message: "post finding failed", error })
    }
}


const createPost = async (req, res) => {

    try {
        const { title, content } = req.body
        if (!title && !content) {

            res.status(400).json({ message: "title & content are required" })

        }

        const post = await Blog.create({
            title,
            content,
            author: req.user.id
        })

        res.status(201).json({ post })

    } catch (error) {
        console.log(error

        );

    }


}




// EditPost
const updatePost = async (req, res) => {

    const updates = req.body
    const post = await Blog.findOneAndUpdate({
        _id: req.params.id, author: req.user.id,
    },
        updates,
        { new: true }

    )
    if (!post) {
        return res.status(404).json({ message: "Post not found" });


    }
    res.json({ post })
}


const deletePost = async (req, res) => {

    try {
        const post = await Blog.findOneAndDelete({
            _id: req.params.id,
            author: req.user.id           
        })

        if (!post) {
            return res.status(404).json({ message: "Post not found" });

        }

        res.json({ message: "post deleted" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

export { getAllPost, getSinglePost, createPost, updatePost, deletePost }