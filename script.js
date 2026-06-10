// تنظیم تاریخ کنکور
const examDate = new Date('2025-07-05T08:00:00'); // تاریخ کنکور رو اینجا تنظیم کنید

// ذخیره و بازیابی وضعیت تیک‌ها
function saveChecklist() {
    const checkboxes = document.querySelectorAll('.task-check');
    const checklistState = {};
    
    checkboxes.forEach(checkbox => {
        checklistState[checkbox.dataset.subject + '-' + checkbox.dataset.task] = checkbox.checked;
    });
    
    localStorage.setItem('konkur-checklist', JSON.stringify(checklistState));
    localStorage.setItem('konkur-date', new Date().toDateString());
}

function loadChecklist() {
    const savedDate = localStorage.getItem('konkur-date');
    const today = new Date().toDateString();
    
    // اگر روز جدید هست، تیک‌ها رو پاک کن
    if (savedDate !== today) {
        localStorage.removeItem('konkur-checklist');
        return;
    }
    
    const savedState = localStorage.getItem('konkur-checklist');
    if (!savedState) return;
    
    const checklistState = JSON.parse(savedState);
    const checkboxes = document.querySelectorAll('.task-check');
    
    checkboxes.forEach(checkbox => {
        const key = checkbox.dataset.subject + '-' + checkbox.dataset.task;
        if (checklistState[key]) {
            checkbox.checked = true;
        }
    });
}

// محاسبه و به‌روزرسانی پیشرفت
function updateProgress() {
    const subjects = ['english', 'arabic', 'literature', 'religious', 'health'];
    let totalTasks = 0;
    let completedTasks = 0;
    
    subjects.forEach(subject => {
        const subjectCheckboxes = document.querySelectorAll(`[data-subject="${subject}"]`);
        const total = subjectCheckboxes.length;
        const completed = document.querySelectorAll(`[data-subject="${subject}"]:checked`).length;
        
        const progressBar = document.getElementById(`progress-${subject}`);
        const progressText = document.getElementById(`progress-text-${subject}`);
        
        if (progressBar && progressText) {
            const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
            progressBar.style.width = percentage + '%';
            progressText.textContent = percentage + '% تکمیل شده';
            
            // تغییر رنگ بر اساس پیشرفت
            if (percentage === 100) {
                progressBar.style.background = 'linear-gradient(90deg, #4caf50, #45a049)';
            } else if (percentage >= 50) {
                progressBar.style.background = 'linear-gradient(90deg, #ff9800, #f57c00)';
            } else {
                progressBar.style.background = 'linear-gradient(90deg, #ff69b4, #db2777)';
            }
        }
        
        totalTasks += total;
        completedTasks += completed;
    });
    
    // به‌روزرسانی پیشرفت کلی
    const overallProgress = document.getElementById('progress-overall');
    const overallText = document.getElementById('progress-text-overall');
    
    if (overallProgress && overallText) {
        const overallPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
        overallProgress.style.width = overallPercentage + '%';
        overallText.textContent = overallPercentage + '% تکمیل شده';
        
        // افکت ویژه برای تکمیل ۱۰۰٪
        if (overallPercentage === 100) {
            overallProgress.style.background = 'linear-gradient(90deg, #4caf50, #8bc34a)';
            overallProgress.style.animation = 'pulse 1s infinite';
            celebrateCompletion();
        } else {
            overallProgress.style.animation = 'none';
        }
    }
}

// جشن تکمیل همه کارها
function celebrateCompletion() {
    // می‌تونید اینجا افکت‌های جذاب اضافه کنید
    console.log('🎉 تبریک! همه کارها انجام شد!');
}

// شمارنده روزهای مانده تا کنکور
function updateCountdown() {
    const today = new Date();
    const timeDiff = examDate.getTime() - today.getTime();
    const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
    
    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
        if (daysLeft > 0) {
            countdownElement.textContent = daysLeft + ' روز';
        } else if (daysLeft === 0) {
            countdownElement.textContent = 'امروز کنکوره! 🎯';
        } else {
            countdownElement.textContent = 'کنکور تموم شد! 🎉';
        }
    }
}

// ریست روزانه
function resetDaily() {
    if (confirm('آیا مطمئنی می‌خوای همه تیک‌ها رو برای امروز پاک کنی؟')) {
        const checkboxes = document.querySelectorAll('.task-check');
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        saveChecklist();
        updateProgress();
    }
}

// تنظیم رویدادها
document.addEventListener('DOMContentLoaded', function() {
    // بارگذاری وضعیت ذخیره شده
    loadChecklist();
    
    // به‌روزرسانی اولیه
    updateProgress();
    updateCountdown();
    
    // اضافه کردن رویداد به چک‌باکس‌ها
    const checkboxes = document.querySelectorAll('.task-check');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            saveChecklist();
            updateProgress();
        });
    });
    
    // دکمه ریست
    const resetBtn = document.getElementById('reset-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', resetDaily);
    }
    
    // به‌روزرسانی شمارنده هر دقیقه
    setInterval(updateCountdown, 60000);
});
