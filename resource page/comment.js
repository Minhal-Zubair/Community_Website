document.addEventListener('DOMContentLoaded', () => {
    const commentsContainerEl = document.getElementById('commentsContainerEl');
    const currentUserComment = document.getElementById('currentUserComment');
    const sendButtonDesktop = document.querySelector('[data-send-desktop-btn="sendButton"]');
    const sendButtonMobile = document.querySelector('[data-send-mobile-btn="sendButton"]');
    const deletePrompt = document.getElementById('deletePrompt');
    const cancelBtn = document.getElementById('cancelBtn');
    const deleteBtn = document.getElementById('deleteBtn');
    let commentToDelete = null;

    function createCommentElement(comment) {
        const commentEl = document.createElement('div');
        commentEl.className = 'user-tweet';

        commentEl.innerHTML = `
            <img src="${comment.avatar}" alt="user profile picture" class="avatar" />
            <div class="user-comment">
                <div class="username-bar">
                    <p class="username">${comment.username}</p>
                    <p class="tweet-time">${comment.time}</p>
                </div>
                <p class="user-text-comment">${comment.text}</p>
                <div class="tweet-interaction-mobile">
                    <button class="button-common button-common-delete" data-delete-btn="${comment.id}">
                        Delete
                    </button>
                </div>
            </div>
        `;
        
        // Event listener for delete button
        commentEl.querySelector('[data-delete-btn]').addEventListener('click', (e) => {
            commentToDelete = comment.id;
            deletePrompt.style.display = 'block';
        });

        return commentEl;
    }

    function addComment(text) {
        const newComment = {
            id: Date.now(), // Use timestamp as unique ID
            username: 'Current User',
            avatar: 'https://github.com/GutoAS/Interactive-comments-section-js-html-css/blob/main/images/avatars/image-juliusomo.png?raw=true',
            time: new Date().toLocaleTimeString(),
            text
        };
        
        const newCommentEl = createCommentElement(newComment);
        commentsContainerEl.appendChild(newCommentEl);
        currentUserComment.value = '';
    }

    function handleSendButtonClick() {
        const commentText = currentUserComment.value.trim();
        if (commentText) {
            addComment(commentText);
        }
    }

    // Event listener for send buttons
    sendButtonDesktop.addEventListener('click', handleSendButtonClick);
    sendButtonMobile.addEventListener('click', handleSendButtonClick);

    // Event listener for delete confirmation
    deleteBtn.addEventListener('click', () => {
        if (commentToDelete) {
            // Remove the comment with the ID
            const commentEls = commentsContainerEl.querySelectorAll('.user-tweet');
            commentEls.forEach(commentEl => {
                if (commentEl.querySelector('[data-delete-btn]').getAttribute('data-delete-btn') === commentToDelete.toString()) {
                    commentEl.remove();
                }
            });
            commentToDelete = null;
            deletePrompt.style.display = 'none';
        }
    });

    // Event listener for delete cancel
    cancelBtn.addEventListener('click', () => {
        commentToDelete = null;
        deletePrompt.style.display = 'none';
    });
});
