function addChapter() {
    const chaptersContainer = document.getElementById('chaptersContainer');

    const chapterDiv = document.createElement('div');
    const chapterId = new Date().getTime(); // Unique ID for each chapter
    chapterDiv.innerHTML = `
                <h3>Chapter ${chaptersContainer.childElementCount + 1}</h3>
                <label for="chapterTitle${chapterId}">Chapter Title:</label>
                <input type="text" id="chapterTitle${chapterId}" required>
                <div id="lessonsContainer${chapterId}"></div>
                <button type="button" onclick="addLesson(${chapterId})">Add Lesson</button>
            `;

    chaptersContainer.appendChild(chapterDiv);
}

function addLesson(chapterId) {
    const lessonsContainer = document.getElementById(`lessonsContainer${chapterId}`);
    const lessonId = new Date().getTime(); // Unique ID for each lesson
    const lessonDiv = document.createElement('div');
    lessonDiv.innerHTML = `
                <h4>Lesson ${lessonsContainer.childElementCount + 1}</h4>
                <label for="lessonTitle${lessonId}">Lesson Title:</label>
                <input type="text" id="lessonTitle${lessonId}" required>
                <label for="lessonVideo${lessonId}">Video URL:</label>
                <input type="text" id="lessonVideo${lessonId}" required>
            `;

    lessonsContainer.appendChild(lessonDiv);
}

document.getElementById('courseForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const courseTitle = document.getElementById('courseTitle').value;
    const courseImg = document.getElementById('courseImg').value;
    const courseDescription = document.getElementById('courseDescription').value;

    console.log('Course Title:', courseTitle);
    console.log('Course Image:', courseImg);
    console.log('Course Description:', courseDescription);

    const chaptersContainer = document.getElementById('chaptersContainer');
    const chapters = chaptersContainer.children;

    for (let i = 0; i < chapters.length; i++) {
        const chapterTitle = document.getElementById(`chapterTitle${chapters[i].id}`);
        console.log(`Chapter ${i + 1} - Title: ${chapterTitle.value}`);

        const lessonsContainer = document.getElementById(`lessonsContainer${chapters[i].id}`);
        const lessons = lessonsContainer.children;

        for (let j = 0; j < lessons.length; j++) {
            const lessonTitle = document.getElementById(`lessonTitle${lessons[j].id}`);
            const lessonVideo = document.getElementById(`lessonVideo${lessons[j].id}`);
            console.log(`  Lesson ${j + 1} - Title: ${lessonTitle.value}, Video: ${lessonVideo.value}`);
        }
    }
});