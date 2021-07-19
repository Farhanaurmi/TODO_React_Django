from django.db import models
from django.contrib.auth.models import User


class TodoClass(models.Model):
    title = models.CharField(max_length=100)
    memo = models.TextField(blank=True)
    createtime = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User,on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class PackageClass(models.Model):
    title = models.CharField(max_length=30)
    limit = models.PositiveIntegerField()
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)

    def __str__(self):
        return self.title

class SubscriptionClass(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    isPaid = models.BooleanField(default=False)
    paidAt = models.DateTimeField(null=True, blank=True)
    package = models.ForeignKey(PackageClass, on_delete=models.SET_NULL, null=True)
