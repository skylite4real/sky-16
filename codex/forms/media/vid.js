// Open the video upload section when the "Add Video" button is clicked
document.getElementById('addVideo').addEventListener('click', function() {
    document.getElementById('videoUploadSection').style.display = 'flex';
});

// Close the video upload section when the close icon is clicked
document.getElementById('closevideoUploadSection').addEventListener('click', function() {
    document.getElementById('videoUploadSection').style.display = 'none';
});

function toggleDescription(id) {
    var description = document.getElementById(id);
    if (description.style.display === "none" || description.style.display === "") {
        description.style.display = "block";
    } else {
        description.style.display = "none";
    }
}

function displayVideo(input) {
    var videoDisplaySection = document.getElementById('videoDisplaySection');
    var video = document.getElementById('uploadedVideo');
    var file = input.files[0];
    var url = URL.createObjectURL(file);
    video.src = url;
    videoDisplaySection.style.display = 'block';

    // Show the next button
    document.getElementById('nextButton').style.display = 'block';
}

function displayThumbnail(input) {
    var thumbnailDisplaySection = document.getElementById('thumbnailDisplaySection');
    var img = document.getElementById('chosenThumbnail');
    var file = input.files[0];
    var reader = new FileReader();
    
    reader.onload = function(e) {
        img.src = e.target.result;
        thumbnailDisplaySection.style.display = 'block';
    }
    
    reader.readAsDataURL(file);
}

function goToNext() {
    // Hide circle-1 content
    document.getElementById('circle1Content').style.display = 'none';
    // Show circle-2 content
    document.getElementById('circle2Content').style.display = 'block';
}
