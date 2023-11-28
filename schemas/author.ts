import { defineField } from "sanity";
import { RxAvatar } from "react-icons/rx";


const author = {
    name: 'author',
    type: 'document',
    title: 'Author',
    description: "Author Schema",
    icon: RxAvatar,
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'about',
            type: 'string',
            title: 'About'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image'
        },
    ]
}

export default author;