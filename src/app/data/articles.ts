import articleImg from "../assets/article.jpg";

export const articles = {
    RUS: {
        smapleArticle: {
            title: "Как придумать название статьи?",
            date: "19 апреля, 2024 год",
            readingTime: "5 минут чтения",
            sectionListTitle: "Содержание статьи",
            content: [
                {
                    type: "title",
                    content: "1. Статья, зачем она нужна?",
                },
                {
                    type: "img",
                    src: articleImg,
                },
                {
                    type: "list",
                    content: {
                        title: "Что вы можете ожидать от нашего блога?",
                        list: [
                            "• Обзоры новейших гаджетов и технологий",
                            "• Анализ трендов в IT-индустрии",
                            "• Советы по использованию технологий в повседневной жизни",
                        ],
                    },
                },
                {
                    type: "title",
                    content: "2. Статья, зачем она нужна?",
                },
                {
                    type: "paragraph",
                    content:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta iste doloribus nobis provident voluptate vitae mollitia et expedita numquam a quo quas suscipit nihil dignissimos, voluptas incidunt dolores recusandae iusto facere corporis. Distinctio consequuntur provident cumque nisi ab accusamus quo optio dolore reprehenderit fuga! Animi suscipit placeat, et, nostrum est fugiat molestias nihil incidunt voluptatem iste nesciunt amet deleniti exercitationem commodi ea soluta eveniet? Voluptatum quidem minima odit sunt possimus cum nesciunt? Optio veritatis illum modi excepturi error minus nobis!",
                },
            ],
        },
    },

    EN: {
        smapleArticle: {
            title: "How to come up with a blog post title?",
            date: "April 19, 2024",
            readingTime: "5 min read",
            sectionListTitle: "Article outline",
            content: [
                {
                    type: "title",
                    content: "1. Article, why is it needed?",
                },
                {
                    type: "img",
                    src: articleImg,
                },
                {
                    type: "list",
                    content: {
                        title: "What can you expect from our blog?",
                        list: [
                            "• Reviews of the latest gadgets and technologies",
                            "• Analysis of trends in the IT industry",
                            "• Tips for using technology in everyday life",
                        ],
                    },
                },
                {
                    type: "title",
                    content: "2. Article, why is it needed?",
                },
                {
                    type: "paragraph",
                    content:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta iste doloribus nobis provident voluptate vitae mollitia et expedita numquam a quo quas suscipit nihil dignissimos, voluptas incidunt dolores recusandae iusto facere corporis. Distinctio consequuntur provident cumque nisi ab accusamus quo optio dolore reprehenderit fuga! Animi suscipit placeat, et, nostrum est fugiat molestias nihil incidunt voluptatem iste nesciunt amet deleniti exercitationem commodi ea soluta eveniet? Voluptatum quidem minima odit sunt possimus cum nesciunt? Optio veritatis illum modi excepturi error minus nobis!",
                },
                {
                    type: "title",
                    content: "3. Article, why is it needed?",
                },
                {
                    type: "list",
                    content: {
                        title: "What can you expect from our blog?",
                        list: [
                            "• Reviews of the latest gadgets and technologies",
                            "• Analysis of trends in the IT industry",
                            "• Tips for using technology in everyday life",
                        ],
                    },
                },
                {
                    type: "img",
                    src: articleImg,
                },
            ], 
        }
    }
};
