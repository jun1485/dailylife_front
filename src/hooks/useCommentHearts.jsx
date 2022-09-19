import { useEffect, useState } from 'react';

import commentApi from 'apis/commentApi';

const useCommentHearts = (replyNum) => {
    const [commentHearts, setCommentHearts] =
        useState(null);

    useEffect(() => {
        const fetchCommentHearts = async () => {
            const { data: hearts } =
                await commentApi.getCommentHeart(
                    replyNum,
                );
            setCommentHearts(hearts);
        };

        fetchCommentHearts();
    }, [replyNum]);

    return { commentHearts };
};

export default useCommentHearts;
