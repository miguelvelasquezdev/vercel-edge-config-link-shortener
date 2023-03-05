import "./globals.css";

export default async function Home() {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <h1 className='font-bold text-3xl'>Link Shortener</h1>
      <input type='text' className='border rounded p-2 outline-0 text-black' placeholder='https://link.com/slug' />
    </div>
  );
}
