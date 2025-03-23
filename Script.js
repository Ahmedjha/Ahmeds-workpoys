// DOM Elements
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const fitnessForm = document.getElementById('fitnessForm');
const workoutPlanSection = document.getElementById('workout-plan');
const daysPerWeekSlider = document.getElementById('daysPerWeek');
const daysValue = document.getElementById('daysValue');
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');
const dayButtons = document.querySelectorAll('.day-btn');
const exercisesContainer = document.getElementById('exercises-container');
const workoutDaysGrid = document.getElementById('workout-days-grid');
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');
const exerciseModal = document.getElementById('exerciseModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.querySelector('.close-modal');

// Sample workout data
const exerciseDatabase = {
  weightLoss: [
    {
      id: 'jumping-jacks',
      name: 'Jumping Jacks',
      sets: 3,
      reps: '30 seconds',
      rest: '15 seconds',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000',
      description: 'A classic cardio exercise that works your whole body while increasing your heart rate.',
      videoUrl: 'https://www.youtube.com/embed/c4DAnQ6DtF8',
      muscle: 'Full Body',
      equipment: 'None',
      difficulty: 'Beginner'
    },
    {
      id: 'mountain-climbers',
      name: 'Mountain Climbers',
      sets: 3,
      reps: '45 seconds',
      rest: '15 seconds',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000',
      description: 'A dynamic exercise that targets your core, shoulders, and legs while providing cardiovascular benefits.',
      videoUrl: 'https://www.youtube.com/embed/nmwgirgXLYM',
      muscle: 'Core',
      equipment: 'None',
      difficulty: 'Intermediate'
    },
    {
      id: 'burpees',
      name: 'Burpees',
      sets: 4,
      reps: '12 reps',
      rest: '30 seconds',
      image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1000',
      description: 'A full-body exercise that combines a squat, plank, push-up, and jump to maximize calorie burn.',
      videoUrl: 'https://www.youtube.com/embed/TU8QYVW0gDU',
      muscle: 'Full Body',
      equipment: 'None',
      difficulty: 'Advanced'
    },
    {
      id: 'high-knees',
      name: 'High Knees',
      sets: 3,
      reps: '40 seconds',
      rest: '20 seconds',
      image: 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?q=80&w=1000',
      description: 'A cardio exercise that involves running in place while lifting your knees as high as possible.',
      videoUrl: 'https://www.youtube.com/embed/oDdkytliOqE',
      muscle: 'Lower Body',
      equipment: 'None',
      difficulty: 'Beginner'
    },
    {
      id: 'jump-rope',
      name: 'Jump Rope',
      sets: 4,
      reps: '60 seconds',
      rest: '30 seconds',
      image: 'https://images.unsplash.com/photo-1515775538093-d2d95c5ee4f5?q=80&w=1000',
      description: 'A highly effective cardio workout that improves coordination and burns calories rapidly.',
      videoUrl: 'https://www.youtube.com/embed/FJmRQ5iTXKE',
      muscle: 'Full Body',
      equipment: 'Jump Rope',
      difficulty: 'Intermediate'
    }
  ],
  muscleGain: [
    {
      id: 'push-ups',
      name: 'Push-Ups',
      sets: 4,
      reps: '12-15 reps',
      rest: '45 seconds',
      image: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?q=80&w=1000',
      description: 'A compound exercise that targets your chest, shoulders, and triceps while engaging your core.',
      videoUrl: 'https://www.youtube.com/embed/IODxDxX7oi4',
      muscle: 'Chest',
      equipment: 'None',
      difficulty: 'Intermediate'
    },
    {
      id: 'squats',
      name: 'Squats',
      sets: 4,
      reps: '15 reps',
      rest: '60 seconds',
      image: 'https://images.unsplash.com/photo-1577221084712-45b0445d2b00?q=80&w=1000',
      description: 'A lower body compound movement that builds strength in your legs, hips, and glutes.',
      videoUrl: 'https://www.youtube.com/embed/aclHkVaku9U',
      muscle: 'Legs',
      equipment: 'None',
      difficulty: 'Beginner'
    },
    {
      id: 'dumbbell-rows',
      name: 'Dumbbell Rows',
      sets: 3,
      reps: '12 reps per arm',
      rest: '45 seconds',
      image: 'https://images.unsplash.com/photo-1597452485595-73c3c7f6a261?q=80&w=1000',
      description: 'A pulling exercise that targets your back muscles, biceps, and rear shoulders.',
      videoUrl: 'https://www.youtube.com/embed/roCP6wCXPqo',
      muscle: 'Back',
      equipment: 'Dumbbells',
      difficulty: 'Intermediate'
    },
    {
      id: 'lunges',
      name: 'Lunges',
      sets: 3,
      reps: '12 reps per leg',
      rest: '45 seconds',
      image: 'https://images.unsplash.com/photo-1434608519344-49d77a699e1d?q=80&w=1000',
      description: 'A unilateral exercise that builds strength and balance in your legs, one side at a time.',
      videoUrl: 'https://www.youtube.com/embed/QOVaHwm-Q6U',
      muscle: 'Legs',
      equipment: 'None',
      difficulty: 'Beginner'
    },
    {
      id: 'shoulder-press',
      name: 'Shoulder Press',
      sets: 3,
      reps: '12 reps',
      rest: '60 seconds',
      image: 'https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?q=80&w=1000',
      description: 'An overhead pressing movement that builds strength and size in your shoulders and triceps.',
      videoUrl: 'https://www.youtube.com/embed/qEwKCR5JCog',
      muscle: 'Shoulders',
      equipment: 'Dumbbells',
      difficulty: 'Intermediate'
    }
  ],
  endurance: [
    {
      id: 'jogging',
      name: 'Jogging',
      sets: 1,
      reps: '20-30 minutes',
      rest: 'None',
      image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1000',
      description: 'A sustained cardio activity that builds cardiovascular endurance and stamina.',
      videoUrl: 'https://www.youtube.com/embed/R-F_BuspEkw',
      muscle: 'Full Body',
      equipment: 'None',
      difficulty: 'Beginner'
    },
    {
      id: 'cycling',
      name: 'Cycling',
      sets: 1,
      reps: '30-45 minutes',
      rest: 'None',
      image: 'https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?q=80&w=1000',
      description: 'A low-impact cardio exercise that builds leg strength and cardiovascular endurance.',
      videoUrl: 'https://www.youtube.com/embed/r3HOKe0X9a0',
      muscle: 'Lower Body',
      equipment: 'Bicycle',
      difficulty: 'Beginner'
    },
    {
      id: 'swimming',
      name: 'Swimming',
      sets: 1,
      reps: '20-30 minutes',
      rest: 'As needed',
      image: 'https://images.unsplash.com/photo-1438029071396-1e831a7fa6d8?q=80&w=1000',
      description: 'A full-body cardio workout that builds endurance with minimal joint stress.',
      videoUrl: 'https://www.youtube.com/embed/gh5mAtmeR3Y',
      muscle: 'Full Body',
      equipment: 'None',
      difficulty: 'Intermediate'
    },
    {
      id: 'stair-climbing',
      name: 'Stair Climbing',
      sets: 3,
      reps: '5 minutes',
      rest: '2 minutes',
      image: 'https://images.unsplash.com/photo-1590487988256-9ed24133863e?q=80&w=1000',
      description: 'A high-intensity exercise that builds leg strength and cardiovascular endurance.',
      videoUrl: 'https://www.youtube.com/embed/Y1-uwSGuD5w',
      muscle: 'Lower Body',
      equipment: 'Stairs',
      difficulty: 'Intermediate'
    },
    {
      id: 'plank',
      name: 'Plank',
      sets: 3,
      reps: '60 seconds',
      rest: '30 seconds',
      image: 'https://images.unsplash.com/photo-1566241142248-11865261e3a7?q=80&w=1000',
      description: 'A core-strengthening isometric exercise that builds endurance in your midsection.',
      videoUrl: 'https://www.youtube.com/embed/pSHjTRCQxIw',
      muscle: 'Core',
      equipment: 'None',
      difficulty: 'Beginner'
    }
  ],
  strength: [
    {
      id: 'deadlifts',
      name: 'Deadlifts',
      sets: 5,
      reps: '5 reps',
      rest: '120 seconds',
      image: 'https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?q=80&w=1000',
      description: 'A compound exercise that builds total-body strength, particularly in the posterior chain.',
      videoUrl: 'https://www.youtube.com/embed/r4MzxtBKyNE',
      muscle: 'Full Body',
      equipment: 'Barbell',
      difficulty: 'Advanced'
    },
    {
      id: 'bench-press',
      name: 'Bench Press',
      sets: 5,
      reps: '5 reps',
      rest: '90 seconds',
      image: 'https://images.unsplash.com/photo-1534368786749-b63e05c92392?q=80&w=1000',
      description: 'A compound pushing exercise that builds strength in your chest, shoulders, and triceps.',
      videoUrl: 'https://www.youtube.com/embed/rT7DgCr-3pg',
      muscle: 'Chest',
      equipment: 'Barbell',
      difficulty: 'Intermediate'
    },
    {
      id: 'barbell-squat',
      name: 'Barbell Squat',
      sets: 5,
      reps: '5 reps',
      rest: '120 seconds',
      image: 'https://images.unsplash.com/photo-1581122584612-713f89daa8eb?q=80&w=1000',
      description: 'A compound lower body exercise that builds strength in your legs, glutes, and core.',
      videoUrl: 'https://www.youtube.com/embed/1oed-UmAxFs',
      muscle: 'Legs',
      equipment: 'Barbell',
      difficulty: 'Advanced'
    },
    {
      id: 'pull-ups',
      name: 'Pull-Ups',
      sets: 4,
      reps: '8 reps',
      rest: '90 seconds',
      image: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?q=80&w=1000',
      description: 'A compound pulling exercise that builds strength in your back, biceps, and core.',
      videoUrl: 'https://www.youtube.com/embed/eGo4IYlbE5g',
      muscle: 'Back',
      equipment: 'Pull-Up Bar',
      difficulty: 'Advanced'
    },
    {
      id: 'overhead-press',
      name: 'Overhead Press',
      sets: 4,
      reps: '8 reps',
      rest: '90 seconds',
      image: 'https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?q=80&w=1000',
      description: 'A compound pushing exercise that builds strength in your shoulders, triceps, and core.',
      videoUrl: 'https://www.youtube.com/embed/2yjwXTZQDDI',
      muscle: 'Shoulders',
      equipment: 'Barbell',
      difficulty: 'Intermediate'
    }
  ],
  toning: [
    {
      id: 'bodyweight-squats',
      name: 'Bodyweight Squats',
      sets: 3,
      reps: '15-20 reps',
      rest: '30 seconds',
      image: 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?q=80&w=1000',
      description: 'A fundamental lower body exercise that tones your legs and glutes.',
      videoUrl: 'https://www.youtube.com/embed/aclHkVaku9U',
      muscle: 'Legs',
      equipment: 'None',
      difficulty: 'Beginner'
    },
    {
      id: 'dumbbell-bicep-curls',
      name: 'Dumbbell Bicep Curls',
      sets: 3,
      reps: '12-15 reps',
      rest: '30 seconds',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1000',
      description: 'An isolation exercise that tones and defines your bicep muscles.',
      videoUrl: 'https://www.youtube.com/embed/ykJmrZ5v0Oo',
      muscle: 'Arms',
      equipment: 'Dumbbells',
      difficulty: 'Beginner'
    },
    {
      id: 'tricep-dips',
      name: 'Tricep Dips',
      sets: 3,
      reps: '12-15 reps',
      rest: '30 seconds',
      image: 'https://images.unsplash.com/photo-1530137073521-dc37cc8cc48c?q=80&w=1000',
      description: 'An upper body exercise that tones the back of your arms (triceps).',
      videoUrl: 'https://www.youtube.com/embed/6kALZikXxLc',
      muscle: 'Arms',
      equipment: 'Bench',
      difficulty: 'Beginner'
    },
    {
      id: 'russian-twists',
      name: 'Russian Twists',
      sets: 3,
      reps: '20 reps (10 each side)',
      rest: '30 seconds',
      image: 'https://images.unsplash.com/photo-1600881333168-2ef49b341f30?q=80&w=1000',
      description: 'A rotational core exercise that tones your abdominals and obliques.',
      videoUrl: 'https://www.youtube.com/embed/wkD8rjkodUI',
      muscle: 'Core',
      equipment: 'Optional weight',
      difficulty: 'Intermediate'
    },
    {
      id: 'glute-bridges',
      name: 'Glute Bridges',
      sets: 3,
      reps: '15-20 reps',
      rest: '30 seconds',
      image: 'https://images.unsplash.com/photo-1434608519344-49d77a699e1d?q=80&w=1000',
      description: 'A lower body exercise that tones and lifts your glutes while engaging your core.',
      videoUrl: 'https://www.youtube.com/embed/wPM8icPu6H8',
      muscle: 'Glutes',
      equipment: 'None',
      difficulty: 'Beginner'
    }
  ]
};

// Focus areas by day for different goals
const focusAreasByGoal = {
  weightLoss: ['HIIT', 'Cardio', 'Full Body', 'Active Recovery', 'Cardio', 'Circuit Training', 'Rest'],
  muscleGain: ['Upper Body', 'Lower Body', 'Rest', 'Push', 'Pull', 'Legs', 'Rest'],
  endurance: ['Long Cardio', 'Tempo', 'Recovery', 'Intervals', 'Steady State', 'Long Cardio', 'Rest'],
  strength: ['Upper Body', 'Lower Body', 'Rest', 'Full Body', 'Accessory Work', 'Power', 'Rest'],
  toning: ['Full Body', 'Core & Arms', 'Active Recovery', 'Lower Body', 'Upper Body', 'Core Circuit', 'Rest']
};

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  }
  
  // Close mobile menu when clicking a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
  
  // Days per week slider
  if (daysPerWeekSlider) {
    daysPerWeekSlider.addEventListener('input', function() {
      daysValue.textContent = `${this.value} days`;
    });
  }
  
  // Tab switching
  tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      
      // Remove active class from all buttons and panes
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));
      
      // Add active class to clicked button and its corresponding pane
      this.classList.add('active');
      document.getElementById(`${tabId}-tab`).classList.add('active');
    });
  });
  
  // Day selection for exercises
  dayButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const dayNum = this.getAttribute('data-day');
      
      // Remove active class from all day buttons
      dayButtons.forEach(b => b.classList.remove('active'));
      
      // Add active class to clicked day button
      this.classList.add('active');
      
      // Display exercises for the selected day
      showExercisesForDay(dayNum);
    });
  });
  
  // Fitness profile form submission
  if (fitnessForm) {
    fitnessForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = {
        gender: document.getElementById('gender').value,
        age: document.getElementById('age').value,
        weight: document.getElementById('weight').value,
        height: document.getElementById('height').value,
        fitnessLevel: document.getElementById('fitnessLevel').value,
        workoutLocation: document.getElementById('workoutLocation').value,
        goal: document.getElementById('goal').value,
        daysPerWeek: document.getElementById('daysPerWeek').value
      };
      
      // Generate workout plan
      generateWorkoutPlan(formData);
      
      // Show workout plan section
      workoutPlanSection.classList.remove('hidden');
      
      // Scroll to workout plan
      setTimeout(() => {
        workoutPlanSection.scrollIntoView({ behavior: 'smooth' });
      }, 300);
      
      // Show toast notification
      showToast('Your personalized workout plan is ready!');
    });
  }
  
  // Contact form submission
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // In a real app, you would send this data to a server
      // For this demo, we'll just show a success message
      showToast('Your message has been sent successfully!');
      
      // Reset the form
      this.reset();
    });
  }
  
  // Close modal when clicking the close button
  if (closeModal) {
    closeModal.addEventListener('click', function() {
      exerciseModal.classList.remove('show');
      document.body.style.overflow = 'auto';
    });
  }
  
  // Close modal when clicking outside of it
  window.addEventListener('click', function(e) {
    if (e.target === exerciseModal) {
      exerciseModal.classList.remove('show');
      document.body.style.overflow = 'auto';
    }
  });
  
  // Escape key to close modal
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && exerciseModal.classList.contains('show')) {
      exerciseModal.classList.remove('show');
      document.body.style.overflow = 'auto';
    }
  });
});

// Functions
function generateWorkoutPlan(profileData) {
  const { goal, daysPerWeek, fitnessLevel } = profileData;
  const focusAreas = focusAreasByGoal[goal] || focusAreasByGoal.weightLoss;
  
  // Clear previous workout plan
  workoutDaysGrid.innerHTML = '';
  
  // Generate cards for each day of the week
  for (let i = 0; i < 7; i++) {
    const isWorkoutDay = i < daysPerWeek;
    const isRestDay = !isWorkoutDay || focusAreas[i] === 'Rest' || focusAreas[i] === 'Active Recovery';
    const dayFocus = focusAreas[i];
    
    // Create day card
    const dayCard = document.createElement('div');
    dayCard.className = 'day-card';
    
    // Day header
    const dayHeader = document.createElement('div');
    dayHeader.className = 'day-header';
    
    const dayTitle = document.createElement('div');
    dayTitle.className = 'day-title';
    dayTitle.innerHTML = `
      <span>Day ${i + 1}</span>
      <span class="day-badge ${isRestDay ? 'rest-day' : ''}">${dayFocus}</span>
    `;
    
    dayHeader.appendChild(dayTitle);
    dayCard.appendChild(dayHeader);
    
    // Day body
    const dayBody = document.createElement('div');
    dayBody.className = 'day-body';
    
    if (isRestDay) {
      dayBody.innerHTML = `
        <p class="text-center" style="padding: 1.5rem 0;">
          ${focusAreas[i] === 'Active Recovery' ? 
            'Light activity like walking, yoga, or stretching to promote recovery.' : 
            'Rest day. Take time to recover and prepare for your next workout.'}
        </p>
      `;
    } else {
      // Get exercises for this day based on goal
      const exercises = getExercisesForGoal(goal, 3); // Get 3 exercises
      
      exercises.forEach(exercise => {
        const exerciseSummary = document.createElement('div');
        exerciseSummary.className = 'exercise-summary';
        exerciseSummary.innerHTML = `
          <span class="exercise-title">${exercise.name}</span>
          <span class="exercise-detail">${exercise.sets} x ${exercise.reps}</span>
        `;
        dayBody.appendChild(exerciseSummary);
      });
    }
    
    dayCard.appendChild(dayBody);
    
    // Day footer
    const dayFooter = document.createElement('div');
    dayFooter.className = 'day-footer';
    
    dayFooter.innerHTML = `
      <div class="day-stats">
        <span class="stat">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="stat-icon"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          ${isRestDay ? '0 min' : getWorkoutDuration(fitnessLevel)}
        </span>
        <span class="stat">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="stat-icon"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
          ${isRestDay ? '0 kcal' : getCalorieBurn(fitnessLevel, goal)}
        </span>
      </div>
      <button class="btn btn-sm ${isRestDay ? 'btn-outline' : 'btn-primary'}" onclick="showDayDetails(${i + 1})">
        ${isRestDay ? 'Rest Day Info' : 'View Details'}
      </button>
    `;
    
    dayCard.appendChild(dayFooter);
    workoutDaysGrid.appendChild(dayCard);
  }
  
  // Set first day as active and show its exercises
  if (dayButtons.length > 0) {
    dayButtons[0].classList.add('active');
    showExercisesForDay(1);
  }
}

function showExercisesForDay(dayNum) {
  // Clear previous exercises
  exercisesContainer.innerHTML = '';
  
  const day = parseInt(dayNum);
  const formData = getFormData();
  const { goal, fitnessLevel } = formData;
  const focusAreas = focusAreasByGoal[goal] || focusAreasByGoal.weightLoss;
  const dayFocus = focusAreas[day - 1];
  
  // Check if it's a rest day
  if (dayFocus === 'Rest' || dayFocus === 'Active Recovery') {
    const restDayContainer = document.createElement('div');
    restDayContainer.className = 'rest-day-container';
    restDayContainer.innerHTML = `
      <div class="glass-card" style="padding: 2rem; text-align: center; max-width: 600px; margin: 0 auto;">
        <h3 style="margin-bottom: 1rem;">${dayFocus === 'Rest' ? 'Rest Day' : 'Active Recovery Day'}</h3>
        <p style="margin-bottom: 1.5rem;">
          ${dayFocus === 'Rest' ? 
            'Rest days are crucial for muscle recovery and growth. Take this day to relax and let your body heal.' : 
            'Active recovery helps improve blood flow to muscles without adding stress. Consider light activities like walking, swimming, or yoga.'}
        </p>
        <div style="margin-top: 1.5rem;">
          <h4 style="margin-bottom: 0.5rem;">Recommendations:</h4>
          <ul style="list-style: disc; padding-left: 1.5rem; text-align: left;">
            ${dayFocus === 'Rest' ? `
              <li>Get 7-9 hours of quality sleep</li>
              <li>Stay hydrated throughout the day</li>
              <li>Consider foam rolling or stretching if desired</li>
              <li>Focus on nutrition and protein intake</li>
            ` : `
              <li>30-45 minutes of low-intensity activity</li>
              <li>Gentle stretching or yoga</li>
              <li>Light mobility work</li>
              <li>Stay below 60% of your maximum heart rate</li>
            `}
          </ul>
        </div>
      </div>
    `;
    exercisesContainer.appendChild(restDayContainer);
    return;
  }
  
  // Get exercises for this day based on goal
  const exercises = getExercisesForGoal(goal, 5); // Get 5 exercises for the daily view
  
  exercises.forEach(exercise => {
    const exerciseCard = document.createElement('div');
    exerciseCard.className = 'exercise-card';
    
    exerciseCard.innerHTML = `
      <div class="exercise-image">
        <img src="${exercise.image}" alt="${exercise.name}">
        ${exercise.videoUrl ? `
          <div class="play-button" onclick="showExerciseModal('${exercise.id}')">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          </div>
        ` : ''}
      </div>
      <div class="exercise-info">
        <h3 class="exercise-name">${exercise.name}</h3>
        <p class="exercise-description">${exercise.description}</p>
        <div class="exercise-meta">
          <span class="meta-badge">${exercise.sets} sets</span>
          <span class="meta-badge">${exercise.reps}</span>
          <span class="meta-badge">${exercise.rest} rest</span>
        </div>
        <div class="exercise-actions">
          <button class="btn btn-sm btn-outline" onclick="showExerciseModal('${exercise.id}')">View Details</button>
          <button class="btn btn-sm btn-primary">Save Exercise</button>
        </div>
      </div>
    `;
    
    exercisesContainer.appendChild(exerciseCard);
  });
}

function showExerciseModal(exerciseId) {
  // Find the exercise in the database
  let exercise = null;
  
  for (const goalExercises of Object.values(exerciseDatabase)) {
    const found = goalExercises.find(ex => ex.id === exerciseId);
    if (found) {
      exercise = found;
      break;
    }
  }
  
  if (!exercise) return;
  
  // Populate modal content
  modalContent.innerHTML = `
    <div class="modal-exercise">
      <div class="modal-exercise-image">
        <img src="${exercise.image}" alt="${exercise.name}">
      </div>
      <div class="modal-exercise-details">
        <h2>${exercise.name}</h2>
        <div class="modal-exercise-info">
          <div class="info-item">
            <strong>Sets:</strong> ${exercise.sets}
          </div>
          <div class="info-item">
            <strong>Reps:</strong> ${exercise.reps}
          </div>
          <div class="info-item">
            <strong>Rest:</strong> ${exercise.rest}
          </div>
          <div class="info-item">
            <strong>Muscle:</strong> ${exercise.muscle}
          </div>
          <div class="info-item">
            <strong>Equipment:</strong> ${exercise.equipment}
          </div>
          <div class="info-item">
            <strong>Difficulty:</strong> ${exercise.difficulty}
          </div>
        </div>
        <div class="modal-exercise-description">
          <h3>Description</h3>
          <p>${exercise.description}</p>
        </div>
        ${exercise.videoUrl ? `
          <div class="modal-exercise-video">
            <h3>Exercise Video</h3>
            <div class="video-container">
              <iframe width="560" height="315" src="${exercise.videoUrl}" title="${exercise.name}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        ` : ''}
      </div>
    </div>
  `;
  
  // Show modal
  exerciseModal.classList.add('show');
  document.body.style.overflow = 'hidden'; // Prevent scrolling while modal is open
}

function getExercisesForGoal(goal, count) {
  // Get exercises for the selected goal
  const exercises = exerciseDatabase[goal] || exerciseDatabase.weightLoss;
  
  // Shuffle the exercises to get a random selection
  const shuffled = [...exercises].sort(() => 0.5 - Math.random());
  
  // Return the requested number of exercises
  return shuffled.slice(0, count);
}

function getWorkoutDuration(fitnessLevel) {
  // Return workout duration based on fitness level
  switch (fitnessLevel) {
    case 'beginner':
      return '30-40 min';
    case 'intermediate':
      return '45-60 min';
    case 'advanced':
      return '60-75 min';
    default:
      return '45 min';
  }
}

function getCalorieBurn(fitnessLevel, goal) {
  // Base calorie burn
  let calories = 300;
  
  // Adjust based on fitness level
  if (fitnessLevel === 'intermediate') calories += 100;
  if (fitnessLevel === 'advanced') calories += 200;
  
  // Adjust based on goal
  if (goal === 'weightLoss') calories += 100;
  if (goal === 'endurance') calories += 50;
  
  return `${calories}-${calories + 150} kcal`;
}

function getFormData() {
  return {
    gender: document.getElementById('gender').value,
    age: document.getElementById('age').value,
    weight: document.getElementById('weight').value,
    height: document.getElementById('height').value,
    fitnessLevel: document.getElementById('fitnessLevel').value,
    workoutLocation: document.getElementById('workoutLocation').value,
    goal: document.getElementById('goal').value,
    daysPerWeek: document.getElementById('daysPerWeek').value
  };
}

function showDayDetails(day) {
  // Switch to daily tab
  tabBtns.forEach(btn => btn.classList.remove('active'));
  tabPanes.forEach(pane => pane.classList.remove('active'));
  
  document.querySelector('[data-tab="daily"]').classList.add('active');
  document.getElementById('daily-tab').classList.add('active');
  
  // Select the day
  dayButtons.forEach(btn => btn.classList.remove('active'));
  document.querySelector(`[data-day="${day}"]`).classList.add('active');
  
  // Show exercises for the day
  showExercisesForDay(day);
}

function showToast(message) {
  // Set toast message
  toastMessage.textContent = message;
  
  // Show toast
  toast.classList.add('show');
  
  // Hide toast after 3 seconds
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Make functions available globally
window.showExerciseModal = showExerciseModal;
window.showDayDetails = showDayDetails;
