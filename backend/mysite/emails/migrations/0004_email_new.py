# Generated by Django 4.2.1 on 2023-05-05 20:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('emails', '0003_remove_email_new'),
    ]

    operations = [
        migrations.AddField(
            model_name='email',
            name='new',
            field=models.BooleanField(default=True),
        ),
    ]
