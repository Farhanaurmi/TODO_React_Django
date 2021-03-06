# Generated by Django 3.2.5 on 2021-07-18 17:21

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='PackageClass',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=30)),
                ('limit', models.PositiveIntegerField()),
                ('price', models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='TodoClass',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('memo', models.TextField(blank=True)),
                ('createtime', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='SubscriptionClass',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('isPaid', models.BooleanField(default=False)),
                ('paidAt', models.DateTimeField(blank=True, null=True)),
                ('package', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='todo.packageclass')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
