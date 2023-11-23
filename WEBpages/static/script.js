<script>
    function uploadImage() {
        var form = document.getElementById('uploadForm');
        var formData = new FormData(form);

        fetch('/process_image', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(result => {
            // Display the processed image
            document.getElementById('resultImage').src = 'data:image/jpeg;base64,' + result.image;
        })
        .catch(error => console.error('Error:', error));
    }
</script>
