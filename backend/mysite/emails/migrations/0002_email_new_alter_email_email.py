# Generated by Django 4.2.1 on 2023-05-05 19:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('emails', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='email',
            name='new',
            field=models.BooleanField(default=True),
        ),
        migrations.AlterField(
            model_name='email',
            name='email',
            field=models.CharField(max_length=75, unique=True),
        ),
    ]
