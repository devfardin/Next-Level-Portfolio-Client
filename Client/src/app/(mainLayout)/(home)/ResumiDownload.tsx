'use client'
import toast from "react-hot-toast";
const handleDownloadResume = async () => {
    const fileId = '1Fekp-4mxRRjgPCQfn7SZ4h51O1gInYx8';
    const apiKey = 'AIzaSyA6dpei6CSH8JlDRSKmQMPJSjzBbrAT0IU';
    const downloadUrl = `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${apiKey}`;
    try {
    //   const response = await axios.get(downloadUrl, { responseType: 'blob' });
    //   const blob = new Blob([response.data], { type: 'application/pdf' });
      const response = await fetch(downloadUrl, {
        method: 'GET',
        headers: {
            "Content-Type": "application/pdf",
        }
      })
      const result = await  response.blob();
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(result);
      link.download = 'Md.Fardin Ahmed.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      toast.error(`Failed to download resume. Please try again later. ${error}`)
    }
  };
const ResumiDownload = () => {
  return (
    <button onClick={handleDownloadResume}
         className="relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-primery rounded-md hover:bg-primery group 
          py-3 px-6 text-xl">
            <span className="w-56 h-48 rounded-md bg-black absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0">
            </span>
            <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">Download My Cv</span>
    </button>
  )
}
export default ResumiDownload
