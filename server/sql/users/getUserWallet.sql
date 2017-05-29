SELECT cards.id, name FROM wallets
JOIN cards ON cards.id = ANY(wallets.card_ids)
WHERE user_id=${user_id};
