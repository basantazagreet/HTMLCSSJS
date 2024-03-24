const google_drive_textbox = document.getElementById('glink');
const download_link_textarea = document.getElementById('download-link');
const copy_span = document.querySelector('.embed-code span');
const button = document.getElementById('btn');
const embed_audio = document.getElementById('embed-audio');
const copy_audio_span = document.querySelector('.copy-audio');
const embed_video = document.getElementById('embed-video');
const copy_video_span = document.querySelector('.copy-video');

const generateLink = (e) => {
    e.preventDefault();
    const google_drive_link = google_drive_textbox.value;
    const confirmLink = google_drive_link.includes('https://drive.google.com/file/d/');
    if(confirmLink == true){
        const get_download_link = google_drive_link.replace('https://drive.google.com/file/d/',"https://drive.google.com/uc?export=download&id=").replace('/view?usp=sharing',"" );
        download_link_textarea.value = get_download_link;

        const audio1 = '<audio width="300" height="32" controls="controls" src="';
        const audio2 = '" type="audio/mp3" ></audio>';
        const audio_code = `${audio1}${get_download_link}${audio2}`;
        embed_audio.value = audio_code;

        const video_mid = get_download_link.replace('/view?usp=drive_link','');
        const video1 = '<iframe src="';
        const video2 = '/preview" width="560" height="315" ></iframe>';
        const video_code = `${video1}${video_mid}${video2}`;
        embed_video.value = video_code;
    }else{
        alert('Please enter a google drive link');
    }
}
const copyText = (target) => {
    if(target.value===""){
        alert('Empty textarea');
    }else{
        navigator.clipboard.writeText(target.value);
    }
}
copy_span.addEventListener('click', (event)=>{
    event.preventDefault();
    return copyText(download_link_textarea, download_link_textarea.value);
});

copy_audio_span.addEventListener('click',(event)=>{
    event.preventDefault();
    return copyText(embed_audio);
});
copy_video_span.addEventListener('click',(event)=>{
    event.preventDefault();
    return copyText(embed_video);
});

button.addEventListener('click', generateLink);