SELECT cards.id, name FROM user_cards
JOIN cards ON cards.id = user_cards.card_id
WHERE user_id=${user_id};