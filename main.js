// تایمر غیبت کبرا
const startDate = new Date('0941-07-09T00:00:00Z');

function updateTimer() {
  const now = new Date();
  const diff = now - startDate;
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const years = Math.floor(days / 365.25);

  const remainingDays = Math.floor(days % 365.25);
  const remainingHours = hours % 24;
  const remainingMinutes = minutes % 60;
  const remainingSeconds = seconds % 60;

  const el = document.getElementById('ghaybat-timer');
  if (el) {
    el.innerText = `${years} سال، ${remainingDays} روز، ${remainingHours} ساعت، ${remainingMinutes} دقیقه، ${remainingSeconds} ثانیه`;
  }
}

// اسکرول انیمیشن با IntersectionObserver (بهینه)
function initScrollAnimations() {
  const elements = document.querySelectorAll('.scroll-animate');
  const opts = { threshold: 0.12 };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('show');
    });
  }, opts);

  elements.forEach(el => observer.observe(el));
}

// ادامه مطلب (toggle)
function toggleText(id, btn) {
  const moreText = document.getElementById(id);
  if (!moreText) return;

  const isOpen = moreText.style.display === 'block';
  moreText.style.display = isOpen ? 'none' : 'block';

  // به‌روزرسانی دکمه و دسترسی‌پذیری
  btn.innerText = isOpen ? 'ادامه مطلب ⬇️' : 'بستن ⬆️';
  btn.setAttribute('aria-expanded', (!isOpen).toString());
  moreText.setAttribute('aria-hidden', isOpen ? 'true' : 'false');
}

// راه‌اندازی
document.addEventListener('DOMContentLoaded', () => {
  updateTimer();
  setInterval(updateTimer, 1000);
  initScrollAnimations();
});
