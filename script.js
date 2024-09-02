function rateDish(dish, rating) {
    const ratingElement = document.getElementById(dish + '-rating');
    if (ratingElement) {
        ratingElement.textContent = `Avaliação: ${rating} estrela${rating > 1 ? 's' : ''}`;
    }

    // Atualizar a cor das estrelas de acordo com a avaliação
    const stars = document.querySelectorAll(`#${dish} .rating span`);
    stars.forEach((star, index) => {
        star.style.color = index < rating ? '#ff8c00' : '#ffd700';
    });
}
