document.addEventListener("DOMContentLoaded", function() {
    const comments = [
        {
          id: 1,
          text: "This is the first comment",
          parentId: null,
          replies: [
            {
              id: 2,
              text: "This is a reply to the first comment",
              parentId: 1,
              replies: [
                {
                  id: 3,
                  text: "This is a nested reply",
                  parentId: 2,
                  replies: [] // Further nesting possible
                }
              ]
            }
          ]
        },
        {
            id: 4,
            text: "No reply on this one",
            parentId: null,
            replies: [
                {
                    id: 5,
                    text: "Sikee",
                    parentId: 4,
                    replies: []
                }
            ]
        },
    ];

    const comments_container = document.getElementById("container");

    function generateCommentHTML(comment, nest_level){
        const div = document.createElement("div");
        div.classList.add("comment");
        div.style.marginLeft = nest_level * 20 + "px";

        div.innerHTML = `
            <p>${comment.text}</p>
        `;
    
        if(comment.replies.length > 0) {
            comment.replies.forEach(reply => {
                const replyDiv = generateCommentHTML(reply, nest_level + 1);
                div.appendChild(replyDiv);
            });
        }

        return div;
    }

    function display_comms() {
        comments.forEach(comment => {
            if(comment.parentId == null) {
                const commentDiv = generateCommentHTML(comment, 0);
                comments_container.appendChild(commentDiv);
            }
        });
    }

    display_comms();

})