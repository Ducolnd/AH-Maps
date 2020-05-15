<h2><?= esc($title); ?></h2>

<?php if (! empty($product) && is_array($product)) : ?>

    <?php foreach ($product as $news_item): ?>

        <h3><?= esc($news_item['name']); ?></h3>

        <div class="main">
            <?= esc($news_item['description']); ?>
        </div>
        <p><a href="/news/<?= esc($news_item['slug'], 'url'); ?>">View article</a></p>
        <img src="<?= esc($news_item['productimg']) ?>" alt="cheese">

    <?php endforeach; ?>

<?php else : ?>

    <h3>No News</h3>

    <p>Unable to find any news for you.</p>

<?php endif ?>