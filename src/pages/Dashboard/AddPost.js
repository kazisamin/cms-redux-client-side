import moment from "moment/moment";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import addPostData from "../../redux/thunk/addPostData";

const AddPost = () => {
    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch();
    const date = moment().format();
    const submit = (data) => {
        const post = {
            title: data.title,
            image: data.image,
            tag: data.tag,
            description:
                data.description,
            date: date,
        };

        console.log(post);
        dispatch(addPostData(post));
        reset();

    };

    return (
        <div className='flex justify-center items-center h-full '>
            <form
                className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white'
                onSubmit={handleSubmit(submit)}
            >
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2 ' htmlFor='title'>
                        Title
                    </label>
                    <input type='text' id='title' className="border p-2 text-xl"  {...register("title")} />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='image'>
                        Image Link
                    </label>
                    <input className="border p-2 text-xl" type='text' name='image' id='image' {...register("image")} />
                </div>

                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-3' htmlFor='tag'>
                        Tag
                    </label>
                    <select className="border p-2 text-xl" name='tag' id='tag' {...register("tag")}>
                        <option value='new'>NEW</option>
                        <option value='hot'>HOT</option>
                    </select>
                </div>



                <div className='flex flex-col w-full max-w-xs'></div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='description'>
                        Description
                    </label>
                    <input
                        className="border p-2 text-xl"
                        type='text'
                        name='description'
                        id='description'
                        {...register("description")}
                    />
                </div>


                <div className='flex justify-between items-center w-full'>
                    <button

                        className=' px-4 py-3 bg-amber-700 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
                        type='submit'

                    >
                        Publish Post
                    </button>

                </div>
            </form >
        </div >
    );
};

export default AddPost;
